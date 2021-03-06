import ToastComponent from './vue-toast.vue';

/*
判断是否是纯对象
*/

function isPlainObject(object){
     return Object.prototype.toString.call(object)==="[object Object]"?true:false;
}



let Toast={}

Toast.install=function(Vue,defaultOptions){

   var temOpt={
     duration:2000
   } 

   if(isPlainObject(defaultOptions)){
     for(var key in defaultOptions){
       temOpt[key]=defaultOptions[key];
     }
   }

    /*
    在vue的原型上拓展一个$toast函数
    */
    Vue.prototype.$toast = function(message,option,optionFn=undefined){

      let opt=temOpt;
      let callback=undefined;
      temOpt={
       duration:2000
      } 
      if(isPlainObject(option)){
          for(var key in option){
            opt[key]=option[key];
          }
          typeof optionFn==='function'?callback=optionFn:callback=undefined;

      }else if(typeof option ==='function'){
          callback = option;
      }

      const toastController=Vue.extend(ToastComponent);
      var instance=new toastController().$mount(document.createElement('div'));
      instance.message=message;
      instance.visible=true;
      document.body.appendChild(instance.$el);
      setTimeout(()=>{
         instance.visible=false;
         document.body.removeChild(instance.$el);
         callback&&callback();
       },opt['duration'])
 
    }

    Vue.prototype.$toast['show'] = function(message,option,optionFn=undefined){
        Vue.prototype.$toast(message,option,optionFn);
    }

}


if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Toast);
}

export default Toast;