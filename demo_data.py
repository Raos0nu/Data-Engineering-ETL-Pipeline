"""
Demo Data Generator
Add sample sales data to the ETL pipeline
"""

import pandas as pd
import random
from datetime import datetime, timedelta

# Sample products with typical prices
PRODUCTS = [
    ("Laptop", 999.99, 1299.99),
    ("Mouse", 19.99, 49.99),
    ("Keyboard", 49.99, 149.99),
    ("Monitor", 199.99, 599.99),
    ("Headphones", 29.99, 299.99),
    ("Webcam", 39.99, 149.99),
    ("USB Cable", 9.99, 24.99),
    ("Phone Charger", 14.99, 39.99),
    ("Tablet", 299.99, 899.99),
    ("Smart Watch", 199.99, 499.99),
    ("Bluetooth Speaker", 49.99, 199.99),
    ("External SSD", 79.99, 299.99),
    ("Gaming Mouse Pad", 19.99, 49.99),
    ("Laptop Stand", 29.99, 89.99),
    ("Wireless Charger", 24.99, 59.99)
]

def generate_demo_data(num_records=50):
    """Generate demo sales data"""
    print(f"🎲 Generating {num_records} demo sales records...")
    
    # Read existing data
    try:
        df_existing = pd.read_csv('data/sample_sales.csv')
        start_order_id = df_existing['order_id'].max() + 1
        print(f"📊 Found {len(df_existing)} existing records")
    except:
        start_order_id = 1
        print("📊 No existing data found, starting fresh")
    
    # Generate new records
    records = []
    for i in range(num_records):
        product_name, min_price, max_price = random.choice(PRODUCTS)
        
        record = {
            'order_id': start_order_id + i,
            'product': product_name,
            'quantity': random.randint(1, 10),
            'price': round(random.uniform(min_price, max_price), 2)
        }
        records.append(record)
    
    # Create DataFrame
    df_new = pd.DataFrame(records)
    
    # Combine with existing data
    try:
        df_combined = pd.concat([df_existing, df_new], ignore_index=True)
    except:
        df_combined = df_new
    
    # Save to CSV
    df_combined.to_csv('data/sample_sales.csv', index=False)
    
    print(f"✅ Successfully added {num_records} new records!")
    print(f"📈 Total records: {len(df_combined)}")
    print("\n📊 Sample of new records:")
    print(df_new.head(10))
    
    # Calculate some stats
    total_value = (df_new['quantity'] * df_new['price']).sum()
    print(f"\n💰 Total value of new orders: ${total_value:,.2f}")
    print(f"📦 Average order value: ${total_value/num_records:,.2f}")

def reset_data():
    """Reset to original sample data"""
    print("🔄 Resetting to original sample data...")
    
    original_data = {
        'order_id': [1, 2, 3, 4, 6, 7],
        'product': ['Widget', 'Gadget', 'Widget', 'Thing', 'Game Cd', 'Fee'],
        'quantity': [10, 5, 7, 3, 5, 1],
        'price': [9.99, 19.99, 9.99, 14.99, 100.0, 1000.0]
    }
    
    df = pd.DataFrame(original_data)
    df.to_csv('data/sample_sales.csv', index=False)
    print("✅ Data reset complete!")
    print("\n📊 Current data:")
    print(df)

if __name__ == "__main__":
    print("=" * 50)
    print("🎮 ETL Pipeline Demo Data Generator")
    print("=" * 50)
    print()
    print("Options:")
    print("1. Add 10 demo records")
    print("2. Add 50 demo records")
    print("3. Add 100 demo records")
    print("4. Reset to original data")
    print("5. Custom amount")
    print()
    
    choice = input("Enter your choice (1-5): ").strip()
    
    if choice == '1':
        generate_demo_data(10)
    elif choice == '2':
        generate_demo_data(50)
    elif choice == '3':
        generate_demo_data(100)
    elif choice == '4':
        reset_data()
    elif choice == '5':
        try:
            num = int(input("Enter number of records to generate: "))
            if num > 0:
                generate_demo_data(num)
            else:
                print("❌ Please enter a positive number")
        except ValueError:
            print("❌ Invalid number")
    else:
        print("❌ Invalid choice")
    
    print("\n" + "=" * 50)
    print("💡 Tip: Run 'python app.py' to view your data in the dashboard!")
    print("=" * 50)

