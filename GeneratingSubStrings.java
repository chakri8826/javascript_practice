import java.util.ArrayDeque;
import java.util.Stack;

class  GeneratingSubStrings {
    public static int generateAllSubstrings(String s,int k) {
        int n = s.length();
        int count=0;
        for (int start = 0; start < n; start++) {
            for (int end = start + 1; end <= n; end++) {
                String temp=s.substring(start, end);
                // int zero=0;
                // int one=0;
                // for(int l=0;l<temp.length();l++){
                //     if(temp.charAt(l)=='0'){
                //        zero++;
                //     }
                //     else{
                //         one++;
                //     }
                // }
                // if(zero<=k || one <=k){
                //     count++;
                // }
                System.out.println(temp);
                
            }
        }
        return count;
    }
 
 
 
    // static ArrayDeque<Integer> h = new ArrayDeque<>();
    // static void reverse(Stack<Integer> s){
    //     System.out.println(s+" ");
    //     if(s.isEmpty()){
    //         return;
    //     }
    //     h.push(s.pop());
    //     reverse(s);
    // }




       public static void main(String[] args) {
        String s =  "abc";
        int k=2;
        generateAllSubstrings(s,k);

    //    Stack<Integer> s = new Stack<>();

    //     // Pushing elements individually
    //     s.push(1);
    //     s.push(2);
    //     s.push(3);
        
    //     reverse(s);
    //     while(!h.isEmpty()){
    //         s.push(h.pop());
    //     }
    //     System.out.print(s+" ");
    }
}


