class Tree
{
    List<int> aListThatAintAField = [];
    public void Add(int x)
    {
        aListThatAintAField.Add(x);

        int index = aListThatAintAField.Count - 1;
        int parentsIndex = Ancestor(index);
        int parent = aListThatAintAField[parentsIndex];

        while (index != 0 && index > parent)
        {
            parentsIndex = Ancestor(index);
            parent = aListThatAintAField[parentsIndex];
            //Swap
            (aListThatAintAField[index], aListThatAintAField[parentsIndex], index) = (aListThatAintAField[parentsIndex], aListThatAintAField[index], parentsIndex);
        }
    }
    public int AntiAdd()
    {
        if (aListThatAintAField.Count == 0)
        {
            throw new Exception();
        }
        int myreturn = aListThatAintAField[0];
        aListThatAintAField[0] = aListThatAintAField[^1];
        int index = 0;
        while (true)
        {
            int leftIndex = LeftOffSpring(index);
            int rightIndex = RightOffSpring(index);

            if (leftIndex >= aListThatAintAField.Count) break;

            int childIndex;
            if (aListThatAintAField[leftIndex] > aListThatAintAField[rightIndex])
            {
                childIndex = aListThatAintAField[leftIndex];
            }
            else
            {
                childIndex = aListThatAintAField[rightIndex];
            }
            if (aListThatAintAField[childIndex] > aListThatAintAField[index])
            {
                (aListThatAintAField[index], aListThatAintAField[childIndex], index) = (aListThatAintAField[childIndex], aListThatAintAField[index], childIndex);
            }
        }




        return myreturn;
    }
    int Ancestor(int i) => (i - 1) / 2;
    int LeftOffSpring(int i) => 2 * i + 1;
    int RightOffSpring(int i) => 2 * i + 2;

}