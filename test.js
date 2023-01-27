function findCommonSubstr(str1,str2){
    let l1 = str1.length
    let l2 = str2.length
    let dp =new Array(l1+1)
    let maxL = -1
    let sub;
    let end;
    for(let i=0;i<l1+1;i++){
        dp[i] = new Array(l2+1)
        for(let j=0;j<l2+1;j++){
            dp[i][j] = 0
        }
    }
     for(let i=1;i<l1+1;i++){
        for(let j=1;j<l2+1;j++){
             if(str1[i-1]==str2[j-1]){
                 dp[i][j] = dp[i-1][j-1] + 1
                 if(dp[i][j] > maxL){
                        maxL = j
                        sub = str2.substr(maxL-j,maxL)
                 }
             }     
        }
    }
    return sub

}


console.log(findCommonSubstr("namemeaning","meaninggg"))
