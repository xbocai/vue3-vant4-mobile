export default {
  table: {
    apiSetting: {
      // 当前页的字段名
      pageField: 'current',
      // 每页数量字段名
      sizeField: 'size',
      // 接口返回的数据字段名
      listField: 'records',
      // 接口返回总页数字段名
      totalField: 'pages',
    },
    //默认分页数量
    defaultPageSize: 10,
    //可切换每页数量集合
    pageSizes: [10, 20, 30, 40, 50],
  },
  upload: {
    //考虑接口规范不同
    apiSetting: {
      // 集合字段名
      infoField: 'result',
      // 图片地址字段名
      imgField: 'imagePath',
    },
    //最大上传图片大小
    maxSize: 2,
    //图片上传类型
    fileType: ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/svg+xml'],
  },
};
