import { uploadPhoto, createUser } from './utils.js'
export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()]) //Promise.all is suitable because we're handling multiple SUCCESSFUL promises
  .then(([photo, user]) => {
  console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
  })
  .catch(error => {
  console.log('Signup system offline');
  });
}
