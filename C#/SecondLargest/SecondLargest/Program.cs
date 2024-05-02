namespace SecondLargest
{
    public class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");

             //SecondLargest(list; x);
        }
        public static int FindLargest(IEnumerable<int> list)
        {
            int x = 0;
            foreach (var y in list)
            {
                if (y > x)
                {
                    x = y;
                }
            }
            return x;

        }

        public static int SecondLargest(int[] list)
        {
            int x = list[0];
            int y = list[0];
            for (int i = 1; i < list.Length; i++)
            {
                y = list[i];
                if (y > x)
                {
                    x = y;
                }
            }
            int z = Array.IndexOf(list, x);
            x = 0;
            for (int i = 0; i < list.Length; i++)
            {
                int w = list[i];
                if (i != z)
                {
                    if (w > x)
                    {
                        x = w;
                    }
                }

            }
            return x;
        }

        public static int NthLargest(int[] list, int n)
        {
            int[] list2 = new int[n];
            // int[] list3 = new int[list.Length];
            var list3 = new List<int>(list);
            for (int i = 0; i < n; i++)
            {
                list2[i] = FindLargest(list3);
                list3.Remove(FindLargest(list3));
            }
             return list2[n];
        }
    }
}
