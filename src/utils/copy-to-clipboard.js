/**
 * 兼容性不好，老版本的浏览器支持度不足
 * @param {} value 
 */
export function copy(value) {
    const transfer = document.createElement('input');
    document.body.appendChild(transfer);
    transfer.value = value; // 这里是需要复制的内容
    // transfer.focus();
    transfer.select();
    if (document.execCommand('copy')) {
        document.execCommand('copy');
    }
    transfer.blur();
    document.body.removeChild(transfer);
}

/**
 * 该方法必须在用户操作环境中执行，否则会出现找不到操作对象的情况
 * @param {*} text 
 */
export function writeText(text) {
    navigator.clipboard.writeText(text).then(function() {
        /* clipboard successfully set */
        console.log('clipboard successfully set');
    }, function(error) {
        /* clipboard write failed */
        console.log('clipboard write failed');
        console.log(error);
    });
}