import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Laptop, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function AppearanceSection() {
  const [mode, setMode] = useState("system");
  const { setTheme } = useTheme();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Appearance</CardTitle>
        <CardDescription>Choose your preferred appearance mode.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Label>Theme Mode</Label>
          <p className="text-sm text-muted-foreground mb-2">Select the theme for the dashboard.</p>
          <RadioGroup defaultValue={mode} onValueChange={setMode} className="grid grid-cols-3 gap-4">
            {["light", "dark", "system"].map((currentMode) => (
              <div key={currentMode}>
                <RadioGroupItem value={currentMode} id={`theme-${currentMode}`} className="sr-only" />
                <Label
                  htmlFor={`theme-${currentMode}`}
                  className={`flex flex-col items-center justify-between rounded-md border-2 p-4 transition-colors
                    ${mode === currentMode ? "border-primary bg-primary text-primary-foreground" : "border-muted bg-popover"}
                    hover:bg-accent hover:text-accent-foreground`}
                >
                  {currentMode === "light" && <Sun className="h-6 w-6 mb-2" />}
                  {currentMode === "dark" && <Moon className="h-6 w-6 mb-2" />}
                  {currentMode === "system" && <Laptop className="h-6 w-6 mb-2" />}
                  <span className="capitalize">{currentMode}</span>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={() => setTheme(mode)}>Save Appearance</Button>
      </CardFooter>
    </Card>
  );
}
