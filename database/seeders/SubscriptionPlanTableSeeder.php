<?php

namespace Database\Seeders;

use App\Models\SubscriptionPlan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subscriptionPlans = [
            [
                'name' => "Basic",
                'price' => 200000,
                'active_period_in_month' => 3,
                'features' => json_encode(['feature1', 'feature2'])
            ],
            [
                'name' => "Premium",
                'price' => 800000,
                'active_period_in_month' => 8,
                'features' => json_encode(['feature1', 'feature2', 'feature3', 'feature4'])
            ],
        ];
        SubscriptionPlan::insert($subscriptionPlans);
    }
}
