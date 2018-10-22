import { mongoose, Schema } from 'mongoose';

const userSchema = new Schema ({
    username: String,
    googleId: String,
    thumbnail: String
});

const User = mongoose.model('user',userSchema);

export default User;