<template>
<section class="toast-container">
    <div class="toast" v-if="visible" v-bind:class="[visible?'fade-in':'fade-out']">
      <span>{{message}}</span>
    </div>
</section>  
</template>


<script>
  export default{
   data(){
     return({
       visible:false,
       message:''
     })
   }

  }

</script>


<style lang="scss">
  $fontSize: 16px !default;

  @function pxToRem($px) {
    @return $px / $fontSize * 1rem;
  }

  @function pxToEm($px) {
    @return $px / $fontSize * 1em;
  }

  @keyframes fade-in{
     0%{
      opacity: 0;
      transform:scale(0.7);
     }
     100%{
      opacity: 1;
      text-transform: scale(1);
     }
   }

   @keyframes fade-out{
     0%{
       opacity: 1;
       transform:scale(1);
     }

     100%{
      opacity: 0;
      transform:scale(0.7);
     }
   }

  .toast-container{
    position:absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    z-index:1000;
    display: flex;
    justify-content:center;
    align-items: center;

    .toast{
      position: relative;
      background: rgba(0, 0, 0, 0.6);
      border-radius: 13px;
      overflow: hidden;
      text-align: center;
      // width: pxToRem(160px);
      // height: pxToRem(90px);
      // line-height: pxToRem(90px);
      padding:pxToRem(17px) pxToRem(27px); 
      .icon{
        font-size: pxToRem(20px);
        color: #fff;
      }
      span{
        font-size: pxToRem(17px);
        color: #fff;
      }
     }

      .fade-in{
        animation:fade-in 0.5s;

      }

      .fade-out{
         animation:fade-out 0.5s;
      }

  }

</style>