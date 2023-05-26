const formatNumber = (val) => {
    return val.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}

export {
    formatNumber
}