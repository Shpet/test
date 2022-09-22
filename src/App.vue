<template>
  <div>
    1
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

div{
  margin: 50px;
  border: 5px solid darkred;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20%;
  position: relative;

  &::after{
    content: '';
    position: absolute;
    left: 100%;
    width: 50px;
    border-top: 5px dotted darkred;
  }
  &::before{
    content: '';
    position: absolute;
    top: 100%;
    height: 50px;
    border-right: 5px dotted darkred;
  }
}
</style>
