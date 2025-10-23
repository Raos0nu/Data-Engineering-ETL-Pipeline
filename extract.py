import pandas as pd 
def extract(file_path):
    data = pd.read_csv(file_path)
    print("Data Extracted")
    return data

if __name__ == "__main__":
    df = extract('data/sample_sales.csv')
    print(df)
