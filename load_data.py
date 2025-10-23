import extract
import pandas as pd

def main():
    while True:
        print("\nChoose an option:")
        print("1. View Extracted Data")
        print("2. Add New Data")
        print("3. Exit")

        choice = input("Enter choice (1-3): ")

        if choice == '1':
            df = extract.extract('data/sample_sales.csv')
            print(df)
        elif choice == '2':
            df = extract.extract('data/sample_sales.csv')
            order_id = input("Enter order id: ")
            product = input("Enter product name: ")
            quantity = int(input("Enter quantity: "))
            price = float(input("Enter price: "))
            new_row = {'order_id': order_id, 'product': product, 'quantity': quantity, 'price': price}
            new_row_df = pd.DataFrame([new_row])
            df = pd.concat([df, new_row_df], ignore_index=True)
            print("New data added. Current Data:")
            print(df)
            df.to_csv('data/sample_sales.csv', index=False)
        elif choice == '3':
            print("Exiting...")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
