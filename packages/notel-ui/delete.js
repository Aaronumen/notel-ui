import fs from "fs"
//删除 auto-imports.d.ts 文件 类型打包如果不包括这个又会报错 所以在打包后删除该文件
fs.unlink("./dist/auto-imports.d.ts", err => {
  if (err) {
    console.log("删除文件失败")
  }
})
