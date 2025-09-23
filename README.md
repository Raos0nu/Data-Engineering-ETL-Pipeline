├── __pycache__
    ├── extract.cpython-311.pyc
    ├── load.cpython-311.pyc
    ├── load_data.cpython-311.pyc
    └── transform.cpython-311.pyc
├── data
    └── sample_sales.csv
├── extract.py
├── load_data.py
├── sales.db
└── transform.py


/__pycache__/extract.cpython-311.pyc:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/Raos0nu/Data-Engineering-ETL-Pipeline/main/__pycache__/extract.cpython-311.pyc


--------------------------------------------------------------------------------
/__pycache__/load.cpython-311.pyc:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/Raos0nu/Data-Engineering-ETL-Pipeline/main/__pycache__/load.cpython-311.pyc


--------------------------------------------------------------------------------
/__pycache__/load_data.cpython-311.pyc:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/Raos0nu/Data-Engineering-ETL-Pipeline/main/__pycache__/load_data.cpython-311.pyc


--------------------------------------------------------------------------------
/__pycache__/transform.cpython-311.pyc:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/Raos0nu/Data-Engineering-ETL-Pipeline/main/__pycache__/transform.cpython-311.pyc


--------------------------------------------------------------------------------
/data/sample_sales.csv:
--------------------------------------------------------------------------------
1 | order_id,product,quantity,price
2 | 1,Widget,10,9.99
3 | 2,Gadget,5,19.99
4 | 3,Widget,7,9.99
5 | 4,Thing,3,14.99
6 | 6,Game Cd,5,100.0
7 | 7,Fee,1,1000.0
8 | 


--------------------------------------------------------------------------------
/extract.py:
--------------------------------------------------------------------------------
 1 | import pandas as pd 
 2 | def extract(file_path):
 3 |     data = pd.read_csv(file_path)
 4 |     print("Data Extracted")
 5 |     return data
 6 | 
 7 | if __name__ == "__main__":
 8 |     df = extract('data/sample_sales.csv')
 9 |     print(df)
10 | 


--------------------------------------------------------------------------------
/load_data.py:
--------------------------------------------------------------------------------
 1 | import extract
 2 | import pandas as pd
 3 | 
 4 | def main():
 5 |     while True:
 6 |         print("\nChoose an option:")
 7 |         print("1. View Extracted Data")
 8 |         print("2. Add New Data")
 9 |         print("3. Exit")
10 | 
11 |         choice = input("Enter choice (1-3): ")
12 | 
13 |         if choice == '1':
14 |             df = extract.extract('data/sample_sales.csv')
15 |             print(df)
16 |         elif choice == '2':
17 |             df = extract.extract('data/sample_sales.csv')
18 |             order_id = input("Enter order id: ")
19 |             product = input("Enter product name: ")
20 |             quantity = int(input("Enter quantity: "))
21 |             price = float(input("Enter price: "))
22 |             new_row = {'order_id': order_id, 'product': product, 'quantity': quantity, 'price': price}
23 |             new_row_df = pd.DataFrame([new_row])
24 |             df = pd.concat([df, new_row_df], ignore_index=True)
25 |             print("New data added. Current Data:")
26 |             print(df)
27 |             df.to_csv('data/sample_sales.csv', index=False)
28 |         elif choice == '3':
29 |             print("Exiting...")
30 |             break
31 |         else:
32 |             print("Invalid choice. Please try again.")
33 | 
34 | if __name__ == "__main__":
35 |     main()
36 | 


--------------------------------------------------------------------------------
/sales.db:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/Raos0nu/Data-Engineering-ETL-Pipeline/main/sales.db


--------------------------------------------------------------------------------
/transform.py:
--------------------------------------------------------------------------------
 1 | def transform(data):
 2 |     data['total_price'] = data['quantity'] * data['price']
 3 |     print("Data Transformed")
 4 |     return data
 5 | 
 6 | if __name__ == "__main__":
 7 |     import extract
 8 |     df = extract.extract('data/sample_sales.csv')
 9 |     df = transform(df)
10 |     print(df)
