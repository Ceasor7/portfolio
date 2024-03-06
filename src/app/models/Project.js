import mongoose, { Schema } from 'mongoose';

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const projectSchema = new Schema({
  ptitle: String,
  description: String,
  glink: String,
  dlink: String,
});

const Project =
  mongoose.models.Project || mongoose.model('Project', projectSchema);

export default Project;
