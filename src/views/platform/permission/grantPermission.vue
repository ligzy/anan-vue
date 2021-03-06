<template>
  <el-dialog :title="title" :visible.sync="dialogPermissionVisible" width="550px" @close="close">
    <el-input
      v-model="filterPermissionText"
      placeholder="输入关键字进行过滤"
    />
    <el-tree
      v-if="hackReset"
      ref="permissionTree"
      :default-checked-keys="checkedKeys"
      :load="loadChildPermissions"
      :props="defaultProps"
      :filter-node-method="filterNode"
      :default-expanded-keys="[1]"
      class="filter-tree"
      node-key="id"
      highlight-current
      show-checkbox
      lazy
      check-strictly
    />
    <div slot="footer" class="dialog-footer">
      <el-button round icon="el-icon-circle-close" @click="cancel()">
        {{ $t('table.cancel') }}
      </el-button>
      <el-button v-if="hasPermission(permissionId)" round type="primary" icon="el-icon-circle-check" @click="updatePermession(form.id)">
        {{ $t('table.update') }}
      </el-button>
    </div>
  </el-dialog>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'GrantPermission',
  data() {
    return {
      parent: {},
      form: {},
      title: '分配权限',
      expandKeys: [],
      checkedKeys: [],
      dialogPermissionVisible: false,
      hackReset: false,
      permissionId: '-1',
      defaultProps: {
        children: 'children',
        label: 'name',
        isLeaf: 'leaf',
        disabled: 'disabled'
      },
      filterPermissionText: ''
    }
  },
  computed: {
    ...mapGetters(['permissions'])
  },
  watch: {
    filterPermissionText(val) {
      this.$refs.permissionTree.filter(val)
    }
  },
  methods: {
    hasPermission(permissionId) {
      if (permissionId && typeof (permissionId) === 'string') {
        const hasPermission = this.permissions[permissionId] || false
        if (!hasPermission) {
          return false
        }
      } else {
        throw new Error(`need permission! Like "'1'"`)
      }
      return true
    },
    filterNode(value, data) {
      if (!value) return true
      return data.name.indexOf(value) !== -1
    },
    updatePermession(id, value) {
      // 得到当前已展开项目中被选中的权限
      const checkedPermissions = this.$refs.permissionTree.getCheckedKeys().sort() // 当前选中的权限集合
      const halfCheckedPermissions = this.$refs.permissionTree.getHalfCheckedKeys().sort() // 当前半选中的权限集合
      const rolePermissions = this.checkedKeys.sort() // 当前角色已拥有的所有权限集合
      const expandPermissions = this.expandKeys.sort() // 树中已展开的权限集合

      // 求并集，到的所有实际被选中的权限 checkedPermissions + halfCheckedPermissions
      const allCheckedPermissions = checkedPermissions.concat(halfCheckedPermissions.filter(function(v) {
        return checkedPermissions.indexOf(v) === -1
      })).sort()

      // 求差集
      const differencePermissions = rolePermissions.filter(function(v) {
        return expandPermissions.indexOf(v) === -1
      })

      // 求并集
      const unionPermissions = differencePermissions.concat(allCheckedPermissions.filter(function(v) {
        return differencePermissions.indexOf(v) === -1
      })).sort()

      // 如果没有修改过数据则直接返回
      if (unionPermissions.toString() === rolePermissions.toString()) {
        this.dialogPermissionVisible = false
        return
      }
      this.parent.updatePermession(id, unionPermissions).then(() => {
        this.dialogPermissionVisible = false
        this.$notify({
          title: '成功',
          message: '修改权限成功!',
          type: 'success',
          duration: 2000
        })
      }).catch(reason => {
        this.$notify({
          title: '更新权限失败',
          message: reason.message,
          type: 'error',
          duration: 5000
        })
      })
    },
    getCheckedKeys(permissions) {
      const checkedKeys = []
      if (!permissions || permissions.length < 1) {
        return checkedKeys
      }
      for (let i = 0; i < permissions.length; i++) {
        checkedKeys.push(permissions[i].permissionId)
      }
      return checkedKeys
    },
    initData(parent, form, objectPermissions, permissionId, hackReset) {
      this.parent = parent
      this.form = form
      this.permissionId = permissionId
      this.checkedKeys = this.getCheckedKeys(objectPermissions)
      if (this.$refs && this.$refs.permissionTree) {
        this.$refs.permissionTree.setCheckedKeys(this.checkedKeys)
      }
      this.dialogPermissionVisible = true
      if (hackReset) {
        this.hackReset = false
        this.$nextTick(() => {
          this.hackReset = true
        })
      } else {
        this.hackReset = true
      }
      this.title = '分配权限' + ' -> ' + form.name
    },
    cancel() {
      this.dialogPermissionVisible = false
    },
    loadChildPermissions(node, resolve) {
      let pid = 0
      if (node.level !== 0) {
        pid = node.data.id
      }
      this.parent.listChildPermissions(pid).then(response => {
        const childPermissions = response.data || []
        // 记录所有被展开过的节点ID，用于保存时比较数据
        for (let i = 0; i < childPermissions.length; i++) {
          const id = childPermissions[i].id
          this.expandKeys.push(id)
          // childPermissions[i].disabled = pid === 0
        }
        return resolve(childPermissions)
      }).catch(reason => {
        this.$notify({
          title: '加载子节点失败',
          message: reason.message,
          type: 'error',
          duration: 5000
        })
      })
    },
    close() {
      this.parent = {}
      this.form = {}
      this.checkedKeys = []
      this.title = ''
      this.expandKeys = []
      this.dialogPermissionVisible = false
      // debugger
      // this.$refs.permissionTree.remove()
    }
  }
}
</script>

<style scoped>

</style>
