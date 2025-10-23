def transform(data):
    data['total_price'] = data['quantity'] * data['price']
    print("Data Transformed")
    return data

if __name__ == "__main__":
    import extract
    df = extract.extract('data/sample_sales.csv')
    df = transform(df)
    print(df)
