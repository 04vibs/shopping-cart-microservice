const can = await rbac.can('admin', 'create', 'article');
if (can) {
  console.log('Admin is able create article');
}
 
// or you can use instance of admin role
const admin = await rbac.getRole('admin');
if (!admin) {
  return console.log('Role does not exists');
}
 
const can = await admin.can('create', 'article');
if (can) {
  console.log('Admin is able create article');    
}