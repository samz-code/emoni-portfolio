import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Smartphone, CreditCard, Building2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("mpesa");
  const [amount, setAmount] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { toast } = useToast();

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!amount) {
      toast({
        title: "Error",
        description: "Please enter an amount",
        variant: "destructive",
      });
      return;
    }

    if (paymentMethod === "mpesa" && !phoneNumber) {
      toast({
        title: "Error",
        description: "Please enter your M-Pesa phone number",
        variant: "destructive",
      });
      return;
    }

    // Here you would integrate with actual payment gateways
    toast({
      title: "Payment Initiated",
      description: `Processing payment of KES ${amount} via ${
        paymentMethod === "mpesa" ? "M-Pesa" : 
        paymentMethod === "paypal" ? "PayPal" : "KCB Bank"
      }`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
            Complete Your Payment
          </h1>
          
          <Card>
            <CardHeader>
              <CardTitle>Choose Payment Method</CardTitle>
              <CardDescription>
                Select your preferred payment method to complete your order
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePayment} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount (KES)</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                  />
                </div>

                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="space-y-4">
                    {/* M-Pesa Option */}
                    <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-accent transition-colors">
                      <RadioGroupItem value="mpesa" id="mpesa" className="mt-1" />
                      <Label htmlFor="mpesa" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-2 mb-2">
                          <Smartphone className="h-5 w-5 text-green-600" />
                          <span className="font-semibold">Lipa na M-Pesa</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Pay instantly using your M-Pesa mobile money
                        </p>
                        {paymentMethod === "mpesa" && (
                          <div className="mt-3">
                            <Label htmlFor="phone">M-Pesa Phone Number</Label>
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="0727492545"
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                              className="mt-1"
                            />
                            <p className="text-xs text-muted-foreground mt-1">
                              You will receive an STK push notification
                            </p>
                          </div>
                        )}
                      </Label>
                    </div>

                    {/* PayPal Option */}
                    <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-accent transition-colors">
                      <RadioGroupItem value="paypal" id="paypal" className="mt-1" />
                      <Label htmlFor="paypal" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-2 mb-2">
                          <CreditCard className="h-5 w-5 text-blue-600" />
                          <span className="font-semibold">PayPal</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Secure international payments with PayPal
                        </p>
                        {paymentMethod === "paypal" && (
                          <p className="text-xs text-muted-foreground mt-3">
                            You will be redirected to PayPal to complete payment
                          </p>
                        )}
                      </Label>
                    </div>

                    {/* KCB Bank Option */}
                    <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-accent transition-colors">
                      <RadioGroupItem value="kcb" id="kcb" className="mt-1" />
                      <Label htmlFor="kcb" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-2 mb-2">
                          <Building2 className="h-5 w-5 text-emerald-600" />
                          <span className="font-semibold">KCB Bank Transfer</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Direct bank transfer to KCB account
                        </p>
                        {paymentMethod === "kcb" && (
                          <div className="mt-3 p-3 bg-muted rounded-md">
                            <p className="text-sm font-medium mb-2">Bank Details:</p>
                            <div className="space-y-1 text-xs">
                              <p><span className="font-medium">Bank:</span> KCB Bank Kenya</p>
                              <p><span className="font-medium">Account Name:</span> Samuel A. Emoni</p>
                              <p><span className="font-medium">Account Number:</span> 1234567890</p>
                              <p><span className="font-medium">Branch:</span> Nairobi</p>
                            </div>
                            <p className="text-xs text-muted-foreground mt-2">
                              Please use your order ID as reference
                            </p>
                          </div>
                        )}
                      </Label>
                    </div>
                  </div>
                </RadioGroup>

                <Button type="submit" className="w-full" size="lg">
                  {paymentMethod === "mpesa" ? "Pay with M-Pesa" :
                   paymentMethod === "paypal" ? "Continue to PayPal" :
                   "Generate Payment Instructions"}
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Secure payment processing • Your information is encrypted
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Having issues with payment? Contact us at{" "}
              <a href="tel:+254727492545" className="text-primary hover:underline">
                +254 727 492 545
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Payment;