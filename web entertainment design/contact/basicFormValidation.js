//class="validationForm" と novalidate 属性を指定した form 要素を独自に検証するスクリプト
document.addEventListener('DOMContentLoaded', () => {
  const validationForm = document.querySelector('.validationForm');
  if(validationForm) {
    //エラーを表示する span 要素に付与するクラス名
    const errorClassName = 'error'; 
    const requiredElems = document.querySelectorAll('.required');
    const patternElems =  document.querySelectorAll('.pattern');
    const minlengthElems =  document.querySelectorAll('.minlength');
    const maxlengthElems =  document.querySelectorAll('.maxlength');
    const equalToElems = document.querySelectorAll('.equal-to'); 
    
    //エラーメッセージを表示する span 要素を生成して親要素に追加する関数
    const createError = (elem, errorMessage) => {
      const errorSpan = document.createElement('span');
      errorSpan.classList.add(errorClassName);
      errorSpan.setAttribute('aria-live', 'polite');
      errorSpan.textContent = errorMessage;
      elem.parentNode.appendChild(errorSpan);
    }
 
    //form 要素の submit イベントを使った送信時の処理
    validationForm.addEventListener('submit', (e) => {
      const errorElems = e.currentTarget.querySelectorAll('.' + errorClassName);
      errorElems.forEach( (elem) => {
        elem.remove(); 
      });
      
      //.required を指定した要素を検証
      requiredElems.forEach( (elem) => {
        const dataError = elem.getAttribute('data-error-required');
        if(elem.tagName === 'INPUT' && elem.getAttribute('type') === 'radio') {
          const checkedRadio = elem.parentElement.querySelector('input[type="radio"]:checked');
          if(checkedRadio === null) {   
            const errorMessage = dataError ? dataError : 'いずれか1つを選択してください';
            createError(elem, errorMessage);
            e.preventDefault();
          }  
        }else if(elem.tagName === 'INPUT' && elem.getAttribute('type') === 'checkbox') {
          const checkedCheckbox = elem.parentElement.querySelector('input[type="checkbox"]:checked');
          if(checkedCheckbox === null) {
            const errorMessage = dataError ? dataError : '少なくとも1つを選択してください';
            createError(elem, errorMessage);
            e.preventDefault();
          } 
        }else{
          const elemValue = elem.value.trim(); 
          if(elemValue.length === 0) {
            if(elem.tagName === 'SELECT') {
              const errorMessage = dataError ? dataError : '選択してください';
              createError(elem, errorMessage);
            }else{
              const errorMessage = dataError ? dataError : '必須項目に入力してください。';
              createError(elem, errorMessage);
            } 
            e.preventDefault();
          } 
        }  
      });
      
      //.pattern を指定した要素のパターンを検証
      patternElems.forEach( (elem) => {
        let dataPattern = elem.getAttribute('data-pattern');
        let pattern;
        const dataError = elem.getAttribute('data-error-pattern');
        let errorMessage = '';
        if(dataPattern) {
          switch(dataPattern) {
            case 'email' :
              pattern = /^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ui;
              errorMessage = dataError ? dataError : 'メールアドレスの形式が正しくありません。';
              break;
            case 'tel' :
              pattern = /^\(?\d{2,5}\)?[-(\.\s]{0,2}\d{1,4}[-)\.\s]{0,2}\d{3,4}$/;
              errorMessage = dataError ? dataError : '電話番号の形式が正しくありません。';
              break;
            case 'zip' :
              pattern = /^\d{3}-{0,1}\d{4}$/;
              errorMessage = dataError ? dataError : '郵便番号の形式が正しくありません。';
              break;
            default :
              pattern = new RegExp(dataPattern);
              errorMessage = dataError ? dataError : '入力された形式が正しくないようです。';
          } 
        }
        if(elem.value.trim() !=='') {
          if(!pattern.test(elem.value)) {
            createError(elem, errorMessage);
            e.preventDefault();
          }
        }
      });
      
      //.minlength を指定した要素のパターンを検証
      minlengthElems.forEach( (elem) => {
        let minlength = elem.getAttribute('data-minlength');
        if(minlength && elem.value !=='') {
          if(elem.value.length < minlength) {
            const dataError = elem.getAttribute('data-error-minlength');
            const errorMessage = dataError ? dataError : minlength + '文字以上で入力ください';
            createError(elem, errorMessage);
            e.preventDefault();
          }
        }
      });
 
      //.maxlength を指定した要素のパターンを検証
      maxlengthElems.forEach( (elem) => {
        let maxlength = elem.getAttribute('data-maxlength');       
        if(maxlength && elem.value !=='') {
          if(elem.value.length > maxlength) {
            const dataError = elem.getAttribute('data-error-maxlength');
            const errorMessage = dataError ? dataError : maxlength + '文字以内で入力ください';
            createError(elem, errorMessage);
            e.preventDefault();
          }
        }
      });
      
      //.equal-to を指定した要素を検証
      equalToElems.forEach( (elem) => {
        const equalToId = elem.getAttribute('data-equal-to');        
        const equalToElem = document.getElementById(equalToId);
        if(elem.value.trim() !=='' && equalToElem.value.trim() !==''){
          if(equalToElem.value !== elem.value) {
            const dataError = elem.getAttribute('data-error-equal-to'); 
            const errorMessage = dataError ? dataError : '入力された値が異なります';
            createError(elem, errorMessage);
            e.preventDefault();
          }
        }
      });
      
      //エラーがあればエラーの最初の要素の位置へスクロール
      const errorElem =  validationForm.querySelector('.' + errorClassName); 
      if(errorElem) {
        const errorElemOffsetTop = errorElem.offsetTop;
        window.scrollTo({
          top: errorElemOffsetTop - 40,
          behavior: 'smooth'
        });
      }
    }); 
    
    //showCount クラスを指定された要素の集まり
    const showCountElems =  document.querySelectorAll('.showCount');  
    //data-maxlengthを指定した要素でshowCountクラスが指定されていれば入力文字数を表示
    showCountElems.forEach( (elem) => {
      const dataMaxlength = elem.getAttribute('data-maxlength');  
      if(dataMaxlength && !isNaN(dataMaxlength)) {
        const countElem = document.createElement('p');
        countElem.classList.add('countSpanWrapper');
        countElem.innerHTML = '<span class="countSpan">0</span>/' + parseInt(dataMaxlength);
        elem.parentNode.appendChild(countElem);
      }
      elem.addEventListener('input', (e) => {
        const countSpan = elem.parentElement.querySelector('.countSpan');
        if(countSpan) {
          const count = e.currentTarget.value.length;
          countSpan.textContent = count;
          if(count > dataMaxlength) {
            countSpan.style.setProperty('color', 'red');
            countSpan.classList.add('overMaxCount');
          }else{
            countSpan.style.removeProperty('color');
            countSpan.classList.remove('overMaxCount');
          }
        }
      });
    });
  }
});