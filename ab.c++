#include <iostream>
using namespace std;
struct node
{
    int info;
    struct node *l , * r;

};
typedef struct node* nodeptr;

void create(nodeptr& t)
{
    char ch;
    if (t == 0)
    {
        t = new node();
        cin >> t->info;
        t->l = 0;
        t->r = 0;
    }
    cout<<"Do you want to add from left ("<<t->info<<") (Y,N) :";
    cin>>ch;
    if(ch=='y')
    create(t->1);
cout<<"Do you want to add from right ("<<t->info<<") (Y,N)"
cin>>ch;
if(ch=='y')
create(t->r);
}

void preorder(nodeptr t)
{
if(t!=0)
{
cout<<(t->);
preorder(t->l);
preorder(t->r);
}
}

int main()
{
    nodeptr t=0;

    create(t);
    preorder(t);
return 0;
}