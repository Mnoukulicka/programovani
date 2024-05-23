using System.ComponentModel.DataAnnotations;

namespace Ponozky
{
    public class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
        }

        public static string VyresProblem(int n, int[] data)
        {
            int MyLongWay = 0;
            int mypos = 0;
            for (int i = 0; i < n + 1; i++)
            {
                if (data[i] != -1)
                {
                    MyLongWay =+ mypos - i;
                    int mysock = data[i];
                    data[i] = -1;
                    MyLongWay = +Array.IndexOf(data, mysock) -i;
            mypos = Array.IndexOf(data, mysock);
            Array.IndexOf(data; mysock) = -1;


            int vysledek = 0;
        }
    }     
            
            return vysledek.ToString();
        }
    }
}
