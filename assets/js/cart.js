
document.addEventListener('DOMContentLoaded', (event) => {
    const updateTotal = () => {
        let total = 0;
        document.querySelectorAll('.input-group input').forEach(input => {
            //下方這行要讀取nt$後的數字
            const price = parseInt(input.closest('.row').querySelector('.col-md-2:nth-child(2)').innerText.replace('NT$', ''));
            const quantity = parseInt(input.value);
            total += price * quantity;
        });
        document.querySelector('.sumNum').innerText = `共計: NT$${total}`;
    };
    
    document.querySelectorAll('.input-group input').forEach(input => {
        input.addEventListener('input', () => {
            updateTotal();
        });
    });

    document.querySelectorAll('.quantityBtn').forEach(btn => {
        btn.addEventListener('click', function () {
            const input = this.closest('.quantityBlock').querySelector('input');
            let value = parseInt(input.value);
            if (this.innerText === '+') {
                value++;
            } else if (this.innerText === '-' && value > 1) {
                value--;
            }
            input.value = value;
            updateTotal();
        });
    });

    document.querySelectorAll('.btn-outline-danger').forEach(btn => {
        btn.addEventListener('click', function () {
            const cartItem = this.closest('.cart-item');
            const hr = cartItem.nextElementSibling;
            if (hr && hr.tagName === 'HR') {
                hr.remove();
            }
            cartItem.remove();
            updateTotal();
        });
    });
    updateTotal();
});