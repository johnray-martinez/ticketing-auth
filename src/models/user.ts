import mongoose from 'mongoose';
import { Password } from '../services/password';

// interface that describes the attributes
// that are required to create a new user
interface UserAttributes {
  email: string;
  password: string;
}

// interface that describes the properties
// that a User Model has
interface UserModel extends mongoose.Model<UserDocument> {
  build(attributes: UserAttributes): UserDocument;
}

// interface that describes the properties
// that a User Document has
interface UserDocument extends mongoose.Document {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  toJSON: { 
    transform(_, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.password;
      delete ret.__v;
    }
  }
});

// used function keyword to retain the this
// context of UserDocument
userSchema.pre('save', async function(done) {
  if (this.isModified('password')) {
    const hashed = await Password.toHash(this.get('password'))
    this.set('password', hashed);
  }
  
  done();
})

userSchema.statics.build = (attributes: UserAttributes) => {
  return new User(attributes);
}

const User = mongoose.model<UserDocument, UserModel>('User', userSchema);

export { User }