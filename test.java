import java.util.*;
class test {
    // public static int numberOfSubstrings(String s) {
    //     int n = s.length();
    //     int ans = 0;
    //     int[] prefix = new int[n];
        
    //     // Initialize prefix array based on the string's characters
    //     for(int i=0;i<n;i++){
    //         if (s.charAt(i) == '1') {
    //             prefix[i] = 1;
    //         }
    //     }

    //     // Calculate prefix sums
    //     for (int i = 1; i < n; i++) {
    //         prefix[i] += prefix[i - 1];
    //     }

    //     for(int i=0;i<n;i++){
    //         int zeros=0,ones=0;
    //         for(int j=i;j<n;j++){
    //             ones=prefix[j];
    //             if(i!=0){
    //                 ones-=prefix[i-1];
    //             }
    //             zeros=j-i+1-ones;
                    
    //             //if condition false
    //             if(zeros*zeros > ones)  j+=(zeros*zeros-ones-1);
                
    //             if(zeros*zeros <= ones){
    //                 ans++;
    //                     if(zeros*zeros < ones){
    //                         int diff=(int)Math.sqrt(ones)-zeros;
    //                         int nextj=j+diff;
    //                         if(nextj>=n){
    //                             ans+=(n-j-1);
    //                         }
    //                         else{
    //                             ans+=diff;
    //                         }
    //                         j=nextj;
    //                     }
    //             }
    //         }
    //     }
    //     return ans;

    // }
   
    public static void main(String[] args) {
        // int res= numberOfSubstrings("00011");

    }
}




 



