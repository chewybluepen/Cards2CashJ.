import { Header } from "@/components/layout/header"
import { PageContainer } from "@/components/layout/page-container"
import { NavigationExplorer } from "@/components/navigation/navigation-explorer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getItemsByLevel } from "@/lib/navigation-utils"

export default function NavigationDashboardPage() {
  // Get counts for each level
  const tertiaryCount = getItemsByLevel(3).length
  const quaternaryCount = getItemsByLevel(4).length
  const quintenaryCount = getItemsByLevel(5).length
  const senaryCount = getItemsByLevel(6).length
  const septimalCount = getItemsByLevel(7).length
  const octalCount = getItemsByLevel(8).length
  const nonalCount = getItemsByLevel(9).length
  const decimalCount = getItemsByLevel(10).length

  return (
    <div className="min-h-screen bg-background">
      <Header title="Navigation Dashboard" showBackButton={true} showLogo={true} />

      <PageContainer className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Cards2Cash Navigation Explorer</CardTitle>
                <CardDescription>Explore all navigation levels in the application</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <StatCard title="Tertiary Pages" count={tertiaryCount} level={3} />
                  <StatCard title="Quaternary Pages" count={quaternaryCount} level={4} />
                  <StatCard title="Quintenary Pages" count={quintenaryCount} level={5} />
                  <StatCard title="Senary Pages" count={senaryCount} level={6} />
                  <StatCard title="Septimal Pages" count={septimalCount} level={7} />
                  <StatCard title="Octal Pages" count={octalCount} level={8} />
                  <StatCard title="Nonal Pages" count={nonalCount} level={9} />
                  <StatCard title="Decimal Pages" count={decimalCount} level={10} />
                </div>

                <Tabs defaultValue="primary">
                  <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                    <TabsTrigger value="primary">Primary</TabsTrigger>
                    <TabsTrigger value="secondary">Secondary</TabsTrigger>
                    <TabsTrigger value="tertiary">Tertiary+</TabsTrigger>
                    <TabsTrigger value="deep">Deep (6+)</TabsTrigger>
                  </TabsList>

                  <TabsContent value="primary">
                    <NavigationExplorer startingLevel={1} />
                  </TabsContent>

                  <TabsContent value="secondary">
                    <NavigationExplorer startingLevel={2} />
                  </TabsContent>

                  <TabsContent value="tertiary">
                    <div className="space-y-8">
                      <section>
                        <h3 className="text-lg font-medium mb-4">Tertiary Navigation (Level 3)</h3>
                        <NavigationExplorer startingLevel={3} />
                      </section>

                      <section>
                        <h3 className="text-lg font-medium mb-4">Quaternary Navigation (Level 4)</h3>
                        <NavigationExplorer startingLevel={4} />
                      </section>

                      <section>
                        <h3 className="text-lg font-medium mb-4">Quintenary Navigation (Level 5)</h3>
                        <NavigationExplorer startingLevel={5} />
                      </section>
                    </div>
                  </TabsContent>

                  <TabsContent value="deep">
                    <div className="space-y-8">
                      <section>
                        <h3 className="text-lg font-medium mb-4">Senary Navigation (Level 6)</h3>
                        <NavigationExplorer startingLevel={6} />
                      </section>

                      <section>
                        <h3 className="text-lg font-medium mb-4">Septimal Navigation (Level 7)</h3>
                        <NavigationExplorer startingLevel={7} />
                      </section>

                      <section>
                        <h3 className="text-lg font-medium mb-4">Octal Navigation (Level 8)</h3>
                        <NavigationExplorer startingLevel={8} />
                      </section>

                      <section>
                        <h3 className="text-lg font-medium mb-4">Nonal Navigation (Level 9)</h3>
                        <NavigationExplorer startingLevel={9} />
                      </section>

                      <section>
                        <h3 className="text-lg font-medium mb-4">Decimal Navigation (Level 10)</h3>
                        <NavigationExplorer startingLevel={10} />
                      </section>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageContainer>
    </div>
  )
}

interface StatCardProps {
  title: string
  count: number
  level: number
}

function StatCard({ title, count, level }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold">{count}</p>
        <p className="text-xs text-muted-foreground mt-1">Level {level} pages</p>
      </CardContent>
    </Card>
  )
}
