import { Schema, model, Document, Model } from 'mongoose';
import bcrypt from 'bcryptjs';
import { Role } from '../types';

// Base interface for User properties
export interface IUser {
  name: string;
  email: string;
  imageURL?: string;
  password?: string;
  role: Role;
  googleId?: string;
}

// Interface for User document with Document methods and our custom methods
export interface UserDocument extends IUser, Document {
  matchesPassword(password: string): Promise<boolean>;
}

// Interface for User model with static methods
export interface UserModel extends Model<UserDocument> {
  // Add any static methods here if needed
}

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    imageURL: { type: String },
    password: { type: String },
    role: { type: String, required: true },
    googleId: { type: String },
  },
  {
    timestamps: true,
  }
);

// Hash password before saving the user
UserSchema.pre<UserDocument>('save', async function() {
  if (this.isModified('password') && this.password) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

// Method to check if password matches the stored hash
UserSchema.methods.matchesPassword = async function(password: string): Promise<boolean> {
  if (!this.password) {
    return false;
  }
  return await bcrypt.compare(password, this.password);
};

export const User = model<UserDocument, UserModel>('User', UserSchema);