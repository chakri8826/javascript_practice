public class test2 {
    // public static boolean isPrime(int n){
    //     if(n<=1) return false;
    //     if(n==2 || n==3) return true;
    //     if(n%2==0 || n%3==0) return false;
    //     for(int i=5;i*i<=n;i=i+6){
    //         if(n%i==0){
    //             return false;
    //         }
    //         if(n%(i+2)==0){
    //             return false;
    //         }
    //     }
    //     return true;
    // }
    //     public static void primes(int n){
    //         for(int i=2;i*i<=n;i++){
    //                 while(n%i==0){
    //                     System.out.println(i);
    //                     n=n/i;
    //                 } 
    //         }
    //         if(n>1){
    //             System.out.println(n);
    //         }
    //     }
    // public static void allDivisors(int n){
    //     int i;
    //     for(i=1;i*i<n;i++){
    //         if(n%i==0){
    //             System.out.println("up: "+i);
    //         }
    //     }
    //     for(;i>0;i--){
    //         if(n%i==0){
    //             System.out.println("down: "+n/i);
    //         }
    //     }
    // }

    // public static int countSeniors(String[] details) {
    //     int count=0;
    //     for(int i=0;i<details.length;i++){
    //         String temp = details[i];
    //         String sub = temp.substring(11,13);
    //         int age = Integer.valueOf(sub);
    //         System.out.println(i+":"+age);
    //         if(age>60){
    //             count++;
    //         }
    //     }
    //     return count;
    // }

    // static int i=0,j=0;
    // public static boolean isPali(String s){
    //     int n=s.length();
    //     if(s.length()==0 || s.length()==1 || i==0 || i==1 || j==1 || j==0){
    //         return true;
    //     }
    //     return s.charAt(i++)==s.charAt(n-1-(j++)) && (isPali(s));
    // }

    public static int sumDigs(int n){
        if(n>=0 && n<=9){
            return n;
        }
        return n%10+sumDigs(n/10);
    }
 

    public static void main(String[] args){
        // String[] arr = {"7868190130M7522","5303914400F9211","9273338290F4010"};
        // int count = countSeniors(arr);
        // System.out.println(count);
        // System.out.println(isPali("abba"));
        System.out.println(sumDigs(9987));
    }
    
}