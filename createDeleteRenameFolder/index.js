//create a folder
async function createFolderSync(){
    await fs.mkdirSync('new')
    console.log('create folder successful')
}
(async ()=>{
    await createFolderSync()
})()



//delete a folder
/*async function deleteFolderSync(){
    await fs.rmdirSync('new')
    console.log('delete folder successful')
}
(async ()=>{
    await deleteFolderSync()
})()




//rename a folder
async function renameFolderSync(){
    await fs.renameSync('new','new2')
    console.log('rename folder successful')
}
(async ()=>{
    await renameFolderSync()
})()*/