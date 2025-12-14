"use client";

import { useAuth } from "@/hooks/use-auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogOut, User as UserIcon, Package, Settings, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProfilePage = () => {
  const { user, logout, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/auth");
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background pt-28 pb-16 flex items-center justify-center">
        <p className="text-muted-foreground">Loading profile...</p>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect via useEffect
  }

  const initials = `${user.first_name?.[0] || ""}${user.last_name?.[0] || ""}`.toUpperCase();

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-28 pb-16">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid gap-8 md:grid-cols-[300px_1fr]"
          >
            {/* Sidebar / User Info */}
            <div className="space-y-6">
              <Card className="shadow-soft border-border">
                <CardContent className="pt-6 text-center">
                  <div className="flex justify-center mb-4">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="" alt={user.first_name} />
                      <AvatarFallback className="text-2xl">{initials || "U"}</AvatarFallback>
                    </Avatar>
                  </div>
                  <h2 className="text-2xl font-bold mb-1">
                    {user.first_name} {user.last_name}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">{user.email}</p>
                  <Button variant="outline" className="w-full gap-2" onClick={logout}>
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Stats or Info could go here */}
            </div>

            {/* Main Content Area */}
            <div className="space-y-6">
              <Tabs defaultValue="account" className="w-full">
                <TabsList className="w-full justify-start h-auto p-1 bg-card border border-border rounded-xl">
                  <TabsTrigger
                    value="account"
                    className="flex-1 gap-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                  >
                    <UserIcon className="w-4 h-4" />
                    Account
                  </TabsTrigger>
                  <TabsTrigger
                    value="orders"
                    className="flex-1 gap-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                  >
                    <Package className="w-4 h-4" />
                    Orders
                  </TabsTrigger>
                  <TabsTrigger
                    value="settings"
                    className="flex-1 gap-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                  >
                    <Settings className="w-4 h-4" />
                    Settings
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="account" className="mt-6 space-y-6">
                  <Card className="shadow-soft border-border">
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                      <CardDescription>
                        Update your personal details here.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First name</Label>
                          <Input id="firstName" defaultValue={user.first_name} readOnly />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last name</Label>
                          <Input id="lastName" defaultValue={user.last_name} readOnly />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" defaultValue={user.email} readOnly />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" defaultValue={user.phone || ""} placeholder="Not set" readOnly />
                      </div>
                    </CardContent>
                  </Card>

                   <Card className="shadow-soft border-border">
                    <CardHeader>
                      <CardTitle>Address</CardTitle>
                      <CardDescription>
                        Manage your shipping address.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                       <div className="space-y-2">
                          <Label htmlFor="address">Shipping Address</Label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input id="address" className="pl-9" defaultValue={user.address || ""} placeholder="No address set" readOnly />
                          </div>
                       </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="orders" className="mt-6">
                  <Card className="shadow-soft border-border">
                    <CardHeader>
                      <CardTitle>Order History</CardTitle>
                      <CardDescription>
                        View your recent orders and their status.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-12 text-muted-foreground">
                        <Package className="w-12 h-12 mx-auto mb-4 opacity-50" />
                        <p>No orders found yet.</p>
                        <Button variant="link" className="mt-2" onClick={() => router.push('/products')}>
                          Start Shopping
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="settings" className="mt-6">
                  <Card className="shadow-soft border-border">
                    <CardHeader>
                      <CardTitle>Account Settings</CardTitle>
                      <CardDescription>
                        Manage your account preferences.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-sm text-muted-foreground">Coming soon...</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
