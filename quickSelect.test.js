const quickSelect=require('./quickSelect')

test('It partitions correctly',()=>{
    let array=[4,1,10,8,7,12,9,2,15]
    expect(quickSelect(array,5)).toBe(8)
})