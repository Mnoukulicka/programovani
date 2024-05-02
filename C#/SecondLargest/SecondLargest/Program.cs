namespace SecondLargest
{
    public class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");

             //SecondLargest(list; x);
        }
        public static int FindLargest(int[] list)
        {
            int x = list[0];
            for (int i = 1; i < list.Length; i++)
            {
                int y = list[i];
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
            return FindLargest(list);
        }
    }
}
