const isStringValidPriceNumber = (value) => {
    const isStringContainNumberGreaterThanZero =
        /^(?:(?:0|[1-9][0-9]*)(?:\.[0-9]*)?|\.[0-9]+)$/ // Could be Integer or float

    if (isStringContainNumberGreaterThanZero.test(value)) {
        return true
    }
    return false
}

export { isStringValidPriceNumber }
