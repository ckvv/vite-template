// import {
//   ElButton,
//   ElForm,
//   ElFormItem,
//   ElInput,
//   ElSelect,
//   ElMenu,
//   ElSubmenu,
//   ElMenuItem,
//   ElMenuItemGroup,
//   ElDropdown,
//   ElDropdownItem,
//   ElDropdownMenu,
//   ElBreadcrumb,
//   ElBreadcrumbItem,
//   ElBadge,
//   ElDialog,
//   ElCollapse,
//   ElCollapseItem,
//   ElTable,
//   ElTableColumn,
//   ElPopover,
//   ElPagination,
//   ElNotification,
//   ElImage,
//   ElMessageBox,
//   ElDatePicker,
// } from 'element-plus';

import { ElButton } from 'element-plus';
// import 'element-plus/lib/theme-chalk/index.css';

// import ElementPlus from 'element-plus';

const components = [
  ElButton,
  // ElForm,
  // ElFormItem,
  // ElInput,
  // ElSelect,
  // ElMenu,
  // ElSubmenu,
  // ElMenuItem,
  // ElMenuItemGroup,
  // ElDropdown,
  // ElDropdownItem,
  // ElDropdownMenu,
  // ElBreadcrumb,
  // ElBreadcrumbItem,
  // ElBadge,
  // ElDialog,
  // ElCollapse,
  // ElCollapseItem,
  // ElTable,
  // ElTableColumn,
  // ElPopover,
  // ElPagination,
  // ElNotification,
  // ElImage,
  // ElMessageBox,
  // ElDatePicker,
];

export default {
  install(app) {
    components.forEach((component) => {
      app.use(component);
    });
  },
};
