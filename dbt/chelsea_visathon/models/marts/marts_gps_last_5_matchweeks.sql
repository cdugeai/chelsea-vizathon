select
    previous_week,
    md_minus_code,
    day_duration,
    distance,
    peak_speed,
    '-' as info_cols,
    date,
    match_week

from {{ref('int_gps_last_5_weeks_data')}}