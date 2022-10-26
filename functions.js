const isFloat = function(floatObj){
  if(floatObj==null || floatObj==''){
    return false;
  }
  return true;
}

const isInputError =  function(obj){
  if(obj!=''){
    return 'bgc-input form-control bgc-calender-icon labelMargin bgc-error-field';
  }
  else{
    return 'bgc-input form-control bgc-calender-icon labelMargin';
  }
}


const onlyChar = function(evt){
  evt = (evt) ? evt : window.event;
  var charcode = (evt.which) ? evt.which : evt.keyCode;
  if(charcode>31 && (charcode <65 || charcode>90) && (charcode<37 || charcode>40) && charcode != 46){
     evt.preventDefault();
  }else{
    return true;
  }
  
  
const onlyCharSpace =  function(evt){
  evt = (evt) ? evt : window.event;
  var charcode = (evt.which) ? evt.which : evt.keyCode;
  if(charcode ==32){
    return true;
  }
  if(charcode>31 && (charcode <65 || charcode>90) && (charcode<37 || charcode>40) && charcode != 46){
     evt.preventDefault();
  }else{
    return true;
  }
    

const onlyNumber = function (e){
  var onlyNumRegex = /^[0-9]*$/;
  if(e!=null){
    if(e.type=='blur' && !onlyNumRegex.test(e.target.value)){
      e.target.value = '';
    }
    // allow backspace, delete, tab, escape, enter and.
    if([46,8,9,27,13].indexOf(e.keyCode)!== -1 || 
       // allow ctrl+A,ctrl+c,ctrl+v, command+A
       ((e.keyCode ==65 || e.keyCode == 86 || e.keyCode == 67) && (e.ctrlKey===true || e.metaKey ===true) ||
        //allow home,end,up,down,left,right
        (e.keyCode>=35 && e.keyCode<=40)){
       //do nothing
       return;
       }
    //ensure if its is a number and stop the keypress
    if((e.shiftKey ||(e.keyCode<48 || e.keyCode >57)) && (e.keyCode<96 || e.keyCode>105)){
      e.preventDefault();
    }
  }
  else{
    return true;
  }
  
}
  
  
const onlyNumberPercentage =  function(evt){
  evt = (evt) ? evt : window.event;
  var charcode = (evt.which) ? evt.which : evt.keyCode;
  
  if(charcode>31 && (charcode <37 || charcode>40) && charcode!=53 || charcode!=110){
    if((e.shiftKey ||(e.keyCode<48 || e.keyCode >57)) && (e.keyCode<96 || e.keyCode>105)){
     evt.preventDefault();
  }else{
    return true;
  }
      
  
 const alphaNumeric =  function(evt){
  evt = (evt) ? evt : window.event;
  var charcode = (evt.which) ? evt.which : evt.keyCode;
  
  if(charcode>31 && (charcode <65 || charcode>90) && (charcode <37 || charcode>40) && charcode!=46){
    if((e.shiftKey ||(e.keyCode<48 || e.keyCode >57)) && (e.keyCode<96 || e.keyCode>105)){
     evt.preventDefault();
  }else{
    return true;
  }
  
  
  
  
  
  
  
  
export default {
  isFloat,
  onlyChar,onlyNumber,
  
  
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
