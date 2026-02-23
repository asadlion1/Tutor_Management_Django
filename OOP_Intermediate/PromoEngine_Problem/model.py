

"""
Docstring for Practice.OOP_Intermediate.PromoEngine_Problem.model

Implement a PromoEngine that applies promo codes to a cart safely and correctly.
"""

class CartItem:
    sku: str
    name: str
    unit_price: float
    qty: int


    def __init__(self, sku: str, name:str, unit_price: float, qty: int):
       
        if unit_price < 0:
            raise ValueError("Unit price must be greater than 0")
        if qty < 0:
            raise ValueError("Quantity must be above 0")

        self.sku = sku
        self.name = name
        self.unit_price = unit_price
        self.qty = qty


