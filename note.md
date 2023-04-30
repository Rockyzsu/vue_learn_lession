nodejs 的http服务器，快数
http-server -c -l -p 8000


# run
vue create project_name
npm run serve



# vite
run:

npm init vite
npm install
npm run dev


Vite内网ip访问，两种配置方式

两种解决方式
方式一：修改vite的配置文件（vite.config.js）
添加 host: "0.0.0.0"

```
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    },
  },
  server: {
    port: 9999,
    host: "0.0.0.0"
  },
});
```

方式二：修改package.json文件

```
  "scripts": {
    "dev": "vite --host 0.0.0.0",
    "build": "vite build",
    "preview": "vite preview"
  },
```

webpack.config.js 手动写入的
```
module.exports = {
    entry: "./a1.js",
    mode: 'development',
    output: {
        path: __dirname,
        filename: "bundle2.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    }
};
```

支持模块热替换
webpack-dev-server

webpack -v
webpack-cli -v

click事件的绑定

```
    <p>Count is {{ count }}</p>                                                                                                         
    <span>Button below</span>                                                                                                           
    <button v-on:click="addNum">add</button>                                                                                            
    <button v-on:click="subNum">sub</button>
```

v-on:click == @click
