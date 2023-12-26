<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CheckUserSubscription
{
    public function handle(Request $request, Closure $next, $status): Response
    {
        $isActive = Auth::user()->isActive;

        if ($status === 'true' && !$isActive) {
            return redirect(route('user.dashboard.subscriptionPlan.index'));
        }

        if ($status === 'false' && $isActive) {
            return redirect(route('user.dashboard.index'));
        }

        return $next($request);
    }
}

