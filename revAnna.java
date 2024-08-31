
import java.util.ArrayList;

public class revAnna {
        public int countPairs(int[] nums) {
                int res= 0;
                for (int i = 0; i < nums.length; i++) {
                    for (int j = i + 1; j < nums.length; j++) {
                        if (areAlmostEqual(nums[i], nums[j])) {
                            res++;
                        }
                    }
                }
                return res;
        }

        public boolean areAlmostEqual(int numA, int numB) {
            if (numA == numB) return true;
            String strA = String.valueOf(numA);
            String strB = String.valueOf(numB);
            
            if (strA.length() < strB.length()) 
                strA = String.format("%0" + strB.length() + "d", numA);
            else if (strB.length() < strA.length()) 
                strB = String.format("%0" + strA.length() + "d", numB);

            char[] charArrayB = strB.toCharArray();
            int len = strA.length();
            int firstDiff = 0;
            int secondDiff = 0;

            while (firstDiff < len && strA.charAt(firstDiff) == strB.charAt(firstDiff)) {
                firstDiff++;
            }

            secondDiff = firstDiff + 1;
            ArrayList<Integer> swapPositions = new ArrayList<>();

            while (secondDiff < len) {
                if (strA.charAt(firstDiff) == strB.charAt(secondDiff)) {
                    swapPositions.add(secondDiff);
                }
                secondDiff++;
            }

            for (int swapPos : swapPositions) {
                char temp = charArrayB[firstDiff];
                charArrayB[firstDiff] = charArrayB[swapPos];
                charArrayB[swapPos] = temp;

                if (strA.equals(new String(charArrayB))) return true;

                temp = charArrayB[firstDiff];
                charArrayB[firstDiff] = charArrayB[swapPos];
                charArrayB[swapPos] = temp;
            }

            return false;
        }


}
