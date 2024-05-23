namespace Rekordy
{
    public class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
        }

        public static string VyresProblem(int[] data)
        {
            int pocetRekordu = 0;
            int rekord = 0;
            foreach (var item in data)
            {
                if (item > rekord)
                {
                    pocetRekordu++;
                    rekord = item;
                }
               
            }
             return pocetRekordu.ToString();
        }
    }
}

