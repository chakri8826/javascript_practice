import java.util.*;
public class test{
    public static void main(String[] args) {
        int[] arr = {1,1,2,2,2,3};
        HashMap<Integer,Integer> hm = new HashMap<>();
        for(int num:arr){
            if(hm.containsKey(num)){
                hm.put(num,hm.get(num)+1);
            }
            else{
                hm.put(num,1);
            }
        }
        Collection<Integer> vals = hm.values();
        
        
    }
}



