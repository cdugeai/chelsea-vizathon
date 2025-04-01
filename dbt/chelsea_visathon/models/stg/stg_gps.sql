{{ config(materialized='table' ) }}

select
    to_date(date, 'dd/mm/yyyy') as date,
    date_part('year',to_date(date, 'dd/mm/yyyy'))  as yyear,
    EXTRACT(WEEK FROM to_date(date, 'dd/mm/yyyy')) as wweek,
    EXTRACT(isodow FROM to_date(date, 'dd/mm/yyyy')) as weekday,
    opposition_code,
    opposition_full,
    md_plus_code,
    md_minus_code,
    season,
    distance,
    distance_over_21,
    distance_over_24,
    distance_over_27,
    accel_decel_over_2_5,
    accel_decel_over_3_5,
    accel_decel_over_4_5,
    day_duration,
    peak_speed,
    hr_zone_1_hms,
    hr_zone_2_hms,
    hr_zone_3_hms,
    hr_zone_4_hms,
    hr_zone_5_hms
from "gps-data"