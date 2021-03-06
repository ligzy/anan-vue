<template>
  <div class="app-container calendar-list-container">
    <div class="filter-container">
      <el-input
        v-model="pageModule.searchText"
        :placeholder="$t('anan_role.searchText')"
        style="width: 200px;"
        class="filter-item"
        @keyup.enter.native="handleFilter"
      />
      <el-button-group>
        <el-button v-waves round class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
          {{ $t('table.search') }}
        </el-button>
        <el-button
          v-permission="'24'"
          round
          class="filter-item"
          style="margin-left: 5px;"
          type="primary"
          icon="el-icon-circle-plus"
          @click="handleAdd"
        >
          {{ $t('table.add') }}
        </el-button>
        <el-button
          v-waves
          v-permission="'25'"
          round
          type="success"
          class="filter-item"
          style="margin-left: 5px;"
          icon="el-icon-edit"
          @click="handleEdit()"
        >
          {{ $t('table.edit') }}
        </el-button>
        <el-button
          v-waves
          v-permission="'26'"
          round
          type="danger"
          class="filter-item"
          style="margin-left: 5px;"
          icon="el-icon-delete"
          @click="handleDelete()"
        >
          {{ $t('table.delete') }}
        </el-button>
      </el-button-group>
    </div>

    <el-table
      v-loading="listLoading"
      :data="roleList"
      :default-sort="{prop: 'value', order: 'descending'}"
      element-loading-text="努力加载中"
      border
      fit
      highlight-current-row
      style="width: 100%"
      @sort-change="sortChange"
      @row-click="rowClick"
    >
      <el-table-column :label="$t('anan_role.value.label')" align="center" sortable prop="value" />

      <el-table-column :label="$t('anan_role.name.label')" align="center" sortable prop="name" />
      <el-table-column
        :label="$t('anan_role.organizId.label')"
        :formatter="getOrganizName"
        prop="organizId"
        align="center"
        show-overflow-tooltip
        sortable
      />
      <!--      <el-table-column align="center" :label="$t('anan_role.tips.label')" sortable prop="tips">
            </el-table-column>-->

      <el-table-column :label="$t('anan_role.createTime.label')" align="center" sortable prop="createTime">
        <template slot-scope="scope">
          <span>{{ scope.row.createTime | dateFormatFilter('yyyy-MM-dd HH:mm:ss') }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('anan_role.updateTime.label')" align="center" sortable prop="updateTime">
        <template slot-scope="scope">
          <span>{{ scope.row.updateTime | dateFormatFilter('yyyy-MM-dd HH:mm:ss') }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('anan_role.status.label')" align="center" class-name="status-col" width="80" sortable prop="status">
        <template slot-scope="scope">
          <el-tag>{{ scope.row.status | statusFilter }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.permission')" align="center" width="200">
        <template slot-scope="scope">
          <el-button round size="mini" type="primary" @click="handleRoleUser(scope.row)">
            {{ $t('table.user') }}
          </el-button>
          <el-button round size="mini" type="warning" @click="handleRolePermission(scope.row)">
            {{ $t('table.permission') }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <div v-show="!listLoading" class="pagination-container">
      <el-pagination
        :current-page.sync="pageModule.pageNumber"
        :page-sizes="pageSizes"
        :page-size="pageModule.pageSize"
        :total="total"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" width="600px">
      <el-form ref="form" :model="form" :rules="rules" label-width="100px">
        <el-form-item :label="$t('anan_role.value.label')" prop="value">
          <el-input v-model="form.value" :placeholder="$t('anan_role.value.placeholder')" />
        </el-form-item>
        <el-form-item :label="$t('anan_role.name.label')" prop="name">
          <el-input v-model="form.name" :placeholder="$t('anan_role.name.placeholder')" />
        </el-form-item>
        <el-form-item :label="$t('anan_role.organizId.label')" prop="organizId">
          <el-select
            v-model="form.organizId"
            :placeholder="$t('anan_role.organizId.placeholder')"
            :filter-method="organizSelectFilter"
            class="filter-item"
            filterable
          >
            <el-option
              v-for="item in oraganizOptions"
              :key="item.id"
              :label="item.fullname || item.name"
              :value="item.id"
              :disabled="isDisabled[item.status]"
            >
              <span style="float: left; color: #8492a6; font-size: 13px">{{ item.code }}</span>
              <span style="float: right">{{ item.fullname || item.name }}</span>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('anan_role.tips.label')" prop="tips">
          <el-input v-model="form.tips" :placeholder="$t('anan_role.tips.placeholder')" />
        </el-form-item>
        <el-form-item :label="$t('anan_role.status.label')" prop="status">
          <el-select v-model="form.status" :placeholder="$t('anan_role.status.placeholder')" class="filter-item">
            <el-option v-for="item in statusOptions" :key="item" :label="item | statusFilter" :value="item" />
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button round icon="el-icon-circle-close" @click="cancel('form')">
          {{ $t('table.cancel') }}
        </el-button>
        <el-button
          v-if="dialogStatus==='create'"
          round
          type="primary"
          icon="el-icon-circle-check"
          autofocus
          @click="create('form')"
        >
          {{ $t('table.confirm') }}
        </el-button>
        <el-button v-else round type="primary" icon="el-icon-circle-check" autofocus @click="update('form')">
          {{ $t('table.update') }}
        </el-button>
      </div>
    </el-dialog>

    <!--<el-dialog :title="textMap[dialogStatus] + '->' + form.name" :visible.sync="dialogPermissionVisible" width="550px">
      <el-input
        :placeholder="$t('anan_role.name.placeholder')输入关键字进行过滤"
        v-model="filterPermissionText">
      </el-input>
      <el-tree class="filter-tree"
               :default-checked-keys="checkedKeys"
               node-key="id"
               highlight-current
               show-checkbox
               lazy
               check-strictly
               :load="loadChildPermissions"
               :props="defaultProps"
               ref="permissionTree"
               :filter-node-method="filterNode"
               :default-expanded-keys="[1]">
      </el-tree>
      <div slot="footer" class="dialog-footer">
        <el-button round @click="cancel('permissionTree')" icon="el-icon-circle-close">{{$t('table.cancel')}}
        </el-button>
        <el-button round v-waves type="primary" v-permission="'49'" @click="updatePermession(form.id, form.value)" icon="el-icon-circle-check">
          {{$t('table.update')}}
        </el-button>
      </div>
    </el-dialog>-->
    <el-dialog
      :title="textMap[dialogStatus] + ' ---> ' + form.name"
      :visible.sync="dialogRoleUserVisible"
      width="550px"
    >
      <el-transfer
        ref="roleUser"
        v-model="roleUsers"
        :filter-method="roleUserfilterMethod"
        :props="{
          key: 'id',
          label: 'username'
        }"
        :titles="['未拥有用户', '已拥有用户']"
        :data="allUsers"
        filterable
      />
      <div slot="footer" class="dialog-footer">
        <el-button v-waves round icon="el-icon-circle-close" @click="cancel('roleUser')">
          {{ $t('table.cancel') }}
        </el-button>
        <el-button v-waves v-permission="'43'" round type="primary" icon="el-icon-circle-check" @click="updateRoleUser()">
          {{ $t('table.update') }}
        </el-button>
      </div>
    </el-dialog>
    <grantPermission ref="grantPermission" />
  </div>
</template>

<script>
import {
  getRole,
  postRole,
  putRole,
  deleteRole,
  putRolePermissions,
  listRolePermissions,
  listRoleUsers,
  putRoleUsers,
  listRolePageByOrganizId
} from './role'
import { listOrganizUser } from '../user/user'
import { formatDate } from '@/utils/date'
import { listOrganizAllChild } from '../organization/organization'
import { mapGetters } from 'vuex'
import grantPermission from '../permission/grantPermission'
import { listVersionChildPermissions } from '../version/version'
import { getOrganiz, getOrganizAuth } from '../organization/organization'
export default {
  name: 'SystemRole',
  components: {
    grantPermission
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        0: '有效',
        1: '禁用'
      }
      return statusMap[status]
    },
    dateFormatFilter(date, pattern) {
      return formatDate(date, pattern || 'yyyy-MM-dd HH:mm:ss')
    }
  },
  data() {
    return {
      oraganizOptions: [],
      organizList: [],
      roleUsers: [],
      allUsers: [],
      filterPermissionText: '',
      versionId: -1,
      topId: -1,
      checkedKeys: [],
      expandKeys: [],
      defaultProps: {
        children: 'children',
        label: 'name',
        isLeaf: 'leaf',
        disabled: 'disabled'
      },
      roleList: null,
      total: null,
      listLoading: true,
      pageModule: {
        pageNumber: 1,
        pageSize: 10,
        searchText: '',
        sortName: '',
        sortOrder: ''
      },
      pageSizes: [5, 10, 25, 50, 100],
      form: {},
      rules: {
        name: [
          {
            required: true,
            message: '角色名称',
            trigger: 'blur'
          },
          {
            min: 1,
            max: 64,
            message: '长度在 1 到 64 个字符',
            trigger: 'blur'
          }
        ],
        organizId: [
          {
            required: true,
            message: '请选择机构',
            trigger: 'blur'
          }
        ],
        value: [
          {
            required: true,
            message: '角色标识',
            trigger: 'blur'
          },
          {
            min: 1,
            max: 64,
            message: '长度在 1 到 64 个字符',
            trigger: 'blur'
          }
        ]
      },
      statusOptions: [0, 1],
      rolesOptions: undefined,
      dialogFormVisible: false,
      dialogPermissionVisible: false,
      dialogRoleUserVisible: false,
      dialogStatus: '',
      textMap: {
        update: '编辑',
        create: '创建',
        permission: '分配权限',
        user: '分配用户'
      },
      isDisabled: {
        0: false,
        1: true
      }
    }
  },
  computed: {
    ...mapGetters(['permissions', 'userInfo'])
  },
  watch: {
    filterPermissionText(val) {
      this.$refs.permissionTree.filter(val)
    }
  },
  mounted() {
    if (!this.organizList || this.organizList.length < 1) {
      this.loadOrganizAllChild(this.userInfo.organizId)
    }
    this.asyncOrganizParameterValue('DefaultPageSize', '10', '表格默认每页记录数', (data) => {
      this.pageModule.pageSize = parseInt(data)
    })
    this.asyncOrganizParameterValue('DefaultPageSizes', '5,10,25,50,100', '表格默认每页记录数可选择项', (data) => {
      const temp = data.split(',')
      this.pageSizes = []
      for (let i = 0; i < temp.length; i++) {
        this.pageSizes[i] = parseInt(temp[i])
      }
    })
  },
  methods: {
    roleUserfilterMethod(query, item) {
      return item.usercode.indexOf(query) > -1 || item.username.indexOf(query) > -1
    },
    getList() {
      this.listLoading = true
      listRolePageByOrganizId(this.pageModule, this.userInfo.organizId).then(response => {
        this.roleList = response.data.rows
        this.total = response.data.total
        this.listLoading = false
      }).catch(reason => {
        this.$notify({
          title: '获取角色列表失败',
          message: reason.message,
          type: 'error',
          duration: 5000
        })
      })
    },
    loadOrganizAllChild(pid) {
      listOrganizAllChild(pid).then(response => {
        this.organizList = response.data || []
        this.oraganizOptions = this.organizList
      }).catch(reason => {
        this.$notify({
          title: '查询后代机构信息失败',
          message: reason.message,
          type: 'error',
          duration: 5000
        })
      })
    },
    organizSelectFilter(input) {
      this.oraganizOptions = this.organizList.filter((value, index) => {
        return value.name.indexOf(input) !== -1 || value.id.indexOf(input) !== -1 || value.fullname.indexOf(input) !== -1
      })
    },
    getOrganizName: function(row, column) {
      const organiz = this.organizList.filter((value) => {
        return value.id === row.organizId
      })
      if (!organiz || organiz.length < 1) {
        return row.organizId
      }
      return organiz[0].fullname || organiz[0].name || row.organizId
    },
    handleFilter() {
      this.pageModule.pageNumber = 1
      this.getList()
    },
    handleSizeChange(val) {
      this.pageModule.pageSize = val
      this.getList()
    },
    handleCurrentChange(val) {
      this.pageModule.pageNumber = val
      this.getList()
    },
    handleAdd() {
      this.resetForm()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
    },
    handleEdit() {
      if (!this.form || !this.form.id || !this.form.name) {
        this.$message({
          message: '操作前请先选择一条数据!'
        })
        return
      }
      getRole(this.form.id).then(response => {
        const form = response.data
        if (form && form.builtIn === 1) {
          this.$message({
            message: '系统内置角色不能修改!'
          })
          return
        }
        this.form = response.data
        this.dialogFormVisible = true
        this.dialogStatus = 'update'
      }).catch(reason => {
        this.$notify({
          title: '获取角色失败',
          message: reason.message,
          type: 'error',
          duration: 5000
        })
      })
    },
    handleRolePermission(row) {
      listRolePermissions(row.id).then(response1 => {
        getOrganiz(row.organizId).then((response2) => {
          this.topId = response2.data.topId
          this.form = row
          getOrganizAuth(this.topId).then((response3) => {
            const versionId = response3.data.versionId
            this.$refs.grantPermission.initData(this, this.form, response1.data, '49', versionId !== this.versionId)
            this.versionId = versionId
          }).catch(reason => {
            this.$notify({
              title: '获取版本信息失败',
              message: reason.message,
              type: 'error',
              duration: 5000
            })
          })
        }).catch(reason => {
          this.$notify({
            title: '获取机构信息失败',
            message: reason.message,
            type: 'error',
            duration: 5000
          })
        })
      }).catch(reason => {
        this.$notify({
          title: '获取角色权限失败',
          message: reason.message,
          type: 'error',
          duration: 5000
        })
      })
    },
    updatePermession(id, unionPermissions) {
      // 组装成后台需要的数据格式
      const newRolePermissions = []
      for (let i = 0; i < unionPermissions.length; i++) {
        const permission = {
          id: undefined,
          roleId: id,
          permissionId: unionPermissions[i]
        }
        newRolePermissions.push(permission)
      }
      return new Promise((resolve, reject) => {
        putRolePermissions(id, newRolePermissions).then(() => {
          resolve(true)
        }).catch(reason => {
          reject(reason)
        })
      })
    },
    listChildPermissions(pid) {
      return new Promise((resolve, reject) => {
        listVersionChildPermissions(pid, this.versionId).then((response) => {
          resolve(response)
        }).catch(reason => {
          reject(reason)
        })
      })
    },
    listOrganizUser() {
      listOrganizUser(this.form.organizId).then(response => {
        this.allUsers = response.data
      }).catch(reason => {
        this.$notify({
          title: '获取所有用户失败',
          message: reason.message,
          type: 'error',
          duration: 5000
        })
      })
    },
    handleRoleUser(row) {
      listRoleUsers(row.id).then(response => {
        this.dialogStatus = 'user'
        this.dialogRoleUserVisible = true
        this.form = row
        this.listOrganizUser()
        const roleUsers = response.data
        this.roleUsers = []
        for (let i = 0; i < roleUsers.length; i++) {
          const user = roleUsers[i].id
          this.roleUsers.push(user)
        }
      }).catch(reason => {
        this.$notify({
          title: '获取角色用户失败',
          message: reason.message,
          type: 'error',
          duration: 5000
        })
      })
    },
    updateRoleUser(id, value) {
      const userRoles = []
      for (let i = 0; i < this.roleUsers.length; i++) {
        const roleUser = {
          userId: this.roleUsers[i],
          roleId: this.form.id,
          organizId: undefined
        }
        userRoles.push(roleUser)
      }
      putRoleUsers(this.form.id, userRoles).then(response => {
        this.dialogRoleUserVisible = false
        this.$notify({
          title: '成功',
          message: '修改角色用户成功!',
          type: 'success',
          duration: 2000
        })
      }).catch(reason => {
        this.$notify({
          title: '更新角色用户失败',
          message: reason.message,
          type: 'error',
          duration: 5000
        })
      })
    },
    filterNode(value, data) {
      if (!value) return true
      return data.name.indexOf(value) !== -1
    },
    handleDelete() {
      if (!this.form || !this.form.id || !this.form.name) {
        this.$message({
          message: '操作前请先选择一条数据!'
        })
        return
      }
      if (this.form && this.form.builtIn === 1) {
        this.$message({
          message: '系统内置角色不能删除!'
        })
        return
      }
      this.$confirm(
        '此操作将永久删除角色名( ' + this.form.name + ' )的相关数据, 是否继续?',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }
      ).then(() => {
        deleteRole(this.form.id).then(response => {
          this.dialogFormVisible = false
          this.getList()
          this.$notify({
            title: '成功',
            message: '删除角色成功!',
            type: 'success',
            duration: 2000
          })
        }).catch(reason => {
          this.$notify({
            title: '删除角色失败',
            message: reason.message,
            type: 'error',
            duration: 5000
          })
        })
      }).catch(reason => {
      })
    },
    create(formName) {
      const set = this.$refs
      set[formName].validate(valid => {
        if (valid) {
          postRole(this.form).then(() => {
            this.dialogFormVisible = false
            this.getList()
            this.$notify({
              title: '成功',
              message: '创建成功',
              type: 'success',
              duration: 2000
            })
          }).catch(reason => {
            this.$notify({
              title: '新建角色失败',
              message: reason.message,
              type: 'error',
              duration: 5000
            })
          })
        } else {
          return false
        }
      })
    },
    cancel(formName) {
      this.dialogFormVisible = false
      this.dialogPermissionVisible = false
      this.dialogRoleUserVisible = false
      if (formName === 'form') {
        this.$refs[formName].resetFields()
      }
    },
    update(formName) {
      const set = this.$refs
      set[formName].validate(valid => {
        if (valid) {
          this.dialogFormVisible = false
          putRole(this.form).then(() => {
            this.dialogFormVisible = false
            this.getList()
            this.$notify({
              title: '成功',
              message: '修改成功',
              type: 'success',
              duration: 2000
            })
          }).catch(reason => {
            this.$notify({
              title: '更新角色信息失败',
              message: reason.message,
              type: 'error',
              duration: 5000
            })
          })
        } else {
          return false
        }
      })
    },
    resetForm() {
      this.form = {
        id: undefined,
        organizId: undefined,
        name: undefined,
        value: undefined,
        tips: undefined,
        status: 0,
        builtIn: 0
      }
    },
    sortChange(column) {
      this.pageModule.sortOrder = (column.order && column.order === 'descending') ? 'DESC' : 'ASC'
      this.pageModule.sortName = column.prop
      if (this.pageModule.sortName) {
        this.getList()
      }
    },
    rowClick(row, event, column) {
      this.form = row
    }
  }
}
</script>
<style scoped>
  .el-select {
    width: 100%;
  }
</style>
