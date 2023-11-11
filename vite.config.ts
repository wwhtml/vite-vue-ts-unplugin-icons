import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

//unplugin-icons中的vite相关插件
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

//自定义图标需要使用的插件
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        IconsResolver({
          // 设置前缀
          // prefix: 'icon'
          //
          //取消前缀
          // this is optional, default enabling all the collections supported by Iconify
          //注意要报取消前缀的图标对应的图标集ID添加至下方，否则不生效
          //只要是取消了前缀，之前的使用方式也不生效，除非手动引入
          // prefix: false,
          // enabledCollections: ['ep'],
          //
          //集合别名
          // alias: {
          //   el: 'ep'
          //   // fas: 'fa-solid'
          //   // ...
          // }
          //
          //当与解析器一起使用进行自动导入时，您需要告诉它您的自定义集合名称：
          //标识自定义图标集
          customCollections: ['syt']
        })
      ]
    }),
    Icons({
      /* options */
      //设置好之后，就可以直接使用图标了，只要用到图标，运行项目就会直接下载对应图标的图标集
      autoInstall: true,
      customCollections: {
        //syt 本地svg的集合名称
        //svg图片的路径
        syt: FileSystemIconLoader('./src/assets/svg', (svg) =>
          svg.replace(/^<svg /, '<svg fill="currentColor" ')
        )
      },
      // 设置svg图标的默认大小（这个插件设置的是1.2em）
      // syt：图标集名称
      // icon:svg图标名称
      iconCustomizer(collection, icon, props) {
        // iconify 的图标设置有效，
        // if (collection === 'ep') {
        //   props.width = '16'
        //   props.height = '16'
        // }

        // // 自定义的图标设置无效；通过输出变量来看，确实是设置了，但是在页面中的数据却显示设置失败
        // //解决办法：将svg图片内部设置的宽高删除
        // if (collection === 'syt') {
        //   props.width = '200'
        //   props.height = '200'
        // }

        //统一设置
        props.width = '16'
        props.height = '16'
        // props.color = 'red'

        //一般情况，不需要设置这个属性
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
