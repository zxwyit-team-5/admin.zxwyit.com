<template>
  <!-- 3、问答题 -->
  <el-form :model="essayForm" status-icon ref="essayForm" @submit.native.prevent>
    <el-form-item label="题干" prop="questionTitle" :label-width="formLabelWidth">
      <el-input type="textarea" :rows="1" placeholder="请输入内容" v-model="essayForm.questionTitle" ></el-input>
    </el-form-item>
    <el-form-item label="参考答案" prop="questionTitle" :label-width="formLabelWidth">
      <el-input type="textarea" :rows="1" placeholder="请输入内容" v-model="essayForm.answerQuestion.aqAnswer"></el-input>
    </el-form-item>
    <el-form-item label="分值" prop="questionTitle" :label-width="formLabelWidth">
      <el-input-number v-model="essayForm.tpqScore" :min="5" :max="10" label="描述文字"></el-input-number>
    </el-form-item>
    <el-form-item :label-width="formLabelWidth">
      <el-button round @click="resetForm('essayForm')">重置</el-button>
      <el-button
        type="primary"
        round
        icon="el-icon-document-checked"
        @click="AddEssay('essayForm')"
      >保存题目</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      formLabelWidth: "100px",//左边需要用到的固定宽度
      essayForm: {//用作添加问答题的格式
        tpqScore: 5,//分值
        questionTitle: "",//题目的标题
        questionTypeId: 3,//题目的类型 1=选择题 2=填空题 3=问答题
        answerQuestion: {
          aqAnswer: ""//问答题的答案
        }
      },
      setEssay: { //用来做重置
        tpqScore: 5,
        questionTitle: "",
        questionTypeId: 3,
        answerQuestion: {
          aqAnswer: ""
        }
      }
    };
  },
  methods: {
    /**
     * 取消重置表单
     * @param {Obj} formName 表单对象
     */
    resetForm(formName) {
      let _this = this;
      _this.$refs[formName].resetFields();
      _this.essayForm = JSON.parse(JSON.stringify(_this.setEssay));
    },
    /**
     * @{AddEssay} 保存题目
     * @{formName} String
    */
    AddEssay(formName){
        var _this=this
        _this.$refs[formName].validate(valid => {
            if(valid){
                _this.$emit("setEssay",_this.essayForm)
                _this.essayForm=JSON.parse(JSON.stringify(_this.setEssay))
            }
        })
    }
  }
};
</script>