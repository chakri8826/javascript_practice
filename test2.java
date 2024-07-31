public class test2 {
    public static boolean isPrime(int n){
        if(n<=1) return false;
        if(n==2 || n==3) return true;
        if(n%2==0 || n%3==0) return false;
        for(int i=5;i*i<=n;i=i+6){
            if(n%i==0){
                return false;
            }
            if(n%(i+2)==0){
                return false;
            }
        }
        return true;
    }
        public static void primes(int n){
            for(int i=2;i*i<=n;i++){
                    while(n%i==0){
                        System.out.println(i);
                        n=n/i;
                    } 
            }
            if(n>1){
                System.out.println(n);
            }
        }
    public static void main(String[] args){
        primes(1092);
    }
    
}




