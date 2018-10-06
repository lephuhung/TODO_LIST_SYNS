<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $user = new \App\User;
        $user->name = "Sucipto";
        $user->email = "chip@pringstudio.com";
        $user->password = Hash::make("rahasiakitaberdua");
        $user->api_token = str_random(100);
        $user->save();
    }
}
